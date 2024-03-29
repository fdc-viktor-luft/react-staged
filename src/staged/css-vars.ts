import { MutableRefObject, useLayoutEffect } from 'react';

export type _StagedRef = MutableRefObject<HTMLDivElement | null>;
export type SlideAnimation = typeof CSSStyleDeclaration.prototype.animation;
export const ANIMATION_TIME = 0.5; // in seconds

enum CssVar {
    DURATION = '--s-trans-dur',
    ANIMATION = '--s-trans-animation',
    WIDTH = '--s-width', // can be used by other clients to build fancy additional animations
    TRANSFORM_X = '--s-transform-x',
    AMOUNT = '--s-amount',
}

const _set = ({ current }: _StagedRef, name: CssVar, value: string): void => {
    if (current) {
        current.style.setProperty(name, value);
    }
};

// should be in [0, 2]
// where 0 means left end, 1 means center and 2 the right end
type Factor = number;

const _setX = ({ current }: _StagedRef, value: number = 0, factor: Factor): void => {
    if (current) {
        current.style.setProperty(CssVar.WIDTH, `${current.clientWidth}`);
        current.style.setProperty(CssVar.TRANSFORM_X, `${-current.clientWidth * factor + value}`);
    }
};
const goTo = (ref: _StagedRef, factor: Factor) => {
    _set(ref, CssVar.DURATION, `${ANIMATION_TIME}s`);
    _setX(ref, 0, factor);
};

const update = (ref: _StagedRef, value: number) => _setX(ref, value, 1);
const amount = (ref: _StagedRef, value: number) => _set(ref, CssVar.AMOUNT, String(value));
const animation = (ref: _StagedRef, value: SlideAnimation = 'ease-out') => _set(ref, CssVar.ANIMATION, value);

const finish = (ref: _StagedRef) => {
    _set(ref, CssVar.DURATION, '0');
    _setX(ref, 0, 1);
};

/**
 * eFactor (effective factor) is between [-1, 1] to page the slider.
 */
const transition = (ref: _StagedRef, eFactor: number, noAnimation: boolean): Promise<void> => {
    if (noAnimation) return Promise.resolve(finish(ref));

    CssVars.goTo(ref, eFactor + 1);
    return new Promise((resolve) => {
        setTimeout(() => {
            finish(ref);
            resolve();
        }, 1000 * ANIMATION_TIME);
    });
};

export const useInitCssVars = (ref: _StagedRef, amount: number, animation?: SlideAnimation) => {
    // useLayoutEffect(() => finish(ref), []); // eslint-disable-line react-hooks/exhaustive-deps
    useLayoutEffect(() => {
        CssVars.amount(ref, amount);
    }, [amount]); // eslint-disable-line react-hooks/exhaustive-deps
    useLayoutEffect(() => {
        CssVars.animation(ref, animation);
    }, [animation]); // eslint-disable-line react-hooks/exhaustive-deps
};

export const CssVars = { goTo, finish, update, transition, amount, animation };
