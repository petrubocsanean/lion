import { Constructor } from '@open-wc/dedupe-mixin';
import { LitElement } from '@lion/core';
import { Validator } from '../../src/validate/Validator';
import { SlotsMap } from '@lion/core/types/SlotMixinTypes';

type ScopedElementsMap = {
  [key: string]: typeof HTMLElement;
};

type FeedbackMessage = {
  message: string | Node;
  type: string;
  validator?: Validator;
};

export declare class ValidateHost {
  static scopedElements: ScopedElementsMap;

  static properties: {
    validators: { attribute: false };
    hasFeedbackFor: { attribute: false };
    shouldShowFeedbackFor: { attribute: false };
    showsFeedbackFor: {
      type: ArrayConstructor;
      attribute: string;
      reflect: boolean;
      converter: {};
    };
    validationStates: { attribute: false };
    isPending: {
      type: BooleanConstructor;
      attribute: string;
      reflect: boolean;
    };
    modelValue: { attribute: false };
    defaultValidators: { attribute: false };
    _visibleMessagesAmount: { attribute: false };
    fieldName: { attribute: false };
  };
  validators: Validator[];
  hasFeedbackFor: string[];
  shouldShowFeedbackFor: string[];
  showsFeedbackFor: string[];
  validationStates: { [key: string]: object };
  isPending: boolean;
  modelValue: unknown;
  defaultValidators: Validator[];
  _visibleMessagesAmount: number;
  fieldName: string;

  static validationTypes: string[];
  slots: SlotsMap;
  _feedbackNode: Element;
  _allValidators: Validator[];

  __syncValidationResult: Validator[];
  __asyncValidationResult: Validator[];
  __validationResult: Validator[];

  connectedCallback(): void;
  disconnectedCallback(): void;
  firstUpdated(changedProperties: import('lit-element').PropertyValues): void;
  updateSync(name: string, oldValue: unknown): void;
  updated(changedProperties: import('lit-element').PropertyValues): void;

  validate(opts: { clearCurrentResult?: boolean }): void;
  __storePrevResult(): void;
  __executeValidators(): void;
  validateComplete: Promise<void>;
  __executeSyncValidators(
    syncValidators: Validator[],
    value: unknown,
    opts: { hasAsync: boolean },
  ): void;
  __executeAsyncValidators(asyncValidators: Validator[], value: unknown): void;
  __executeResultValidators(regularValidationResult: Validator[]): Validator[];
  __finishValidation(options: { source: 'sync' | 'async'; hasAsync?: boolean }): void;
  __clearValidationResults(): void;
  __onValidatorUpdated(e: Event | CustomEvent): void;
  __setupValidators(): void;
  __isEmpty(v: unknown): boolean;
  __getFeedbackMessages(validators: Validator[]): Promise<FeedbackMessage[]>;
  _updateFeedbackComponent(): void;
  _showFeedbackConditionFor(type: string): boolean;
  _hasFeedbackVisibleFor(type: string): boolean;
  _updateShouldShowFeedbackFor(): void;
  _prioritizeAndFilterFeedback(opts: { validationResult: Validator[] }): Validator[];
}

export declare function ValidateImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T & Constructor<ValidateHost> & ValidateHost;

export type ValidateMixin = typeof ValidateImplementation;
