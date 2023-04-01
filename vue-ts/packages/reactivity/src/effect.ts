import { initDepMarkers } from './dep';

let activeEffectScope;

export let activeEffect;

let effectTrackDepth = 0;

export let trackOpBit = 1;

const maxMarkerBits = 30;

export class ReactiveEffect {
  active = true;
  deps = [];
  parent = undefined;

  constructor(public fn, public scheduler, scope?) {
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;

      trackOpBit = 1 << ++effectTrackDepth;

      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this)
      }
      return this.fn();
    } catch (e) {
      
    }
    console.log('run run')
  }
}

export let shouldTrack = true;

export function recordEffectScope(
  effect,
  scope = activeEffectScope
) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}