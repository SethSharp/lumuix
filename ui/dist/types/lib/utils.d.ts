import type { Updater } from '@tanstack/vue-table';
import type { Ref } from 'vue';
import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref): void;
