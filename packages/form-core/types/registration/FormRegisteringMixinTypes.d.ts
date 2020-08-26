import { Constructor } from '@open-wc/dedupe-mixin';
import { FormRegistrarHost } from './FormRegistrarMixinTypes';

export declare class FormRegisteringHost {
  connectedCallback(): void;
  disconnectedCallback(): void;
  __parentFormGroup?: FormRegistrarHost;
}

export declare function FormRegisteringImplementation<T extends Constructor<HTMLElement>>(
  superclass: T,
): T & Constructor<FormRegisteringHost> & typeof FormRegisteringHost;

export type FormRegisteringMixin = typeof FormRegisteringImplementation;
