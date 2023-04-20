/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { DragTarget } from './drag_target.js';
import type { IDeleteArea } from './interfaces/i_delete_area.js';
import type { IDraggable } from './interfaces/i_draggable.js';
/**
 * Abstract class for a component that can delete a block or bubble that is
 * dropped on top of it.
 */
export declare class DeleteArea extends DragTarget implements IDeleteArea {
    /**
     * Whether the last block or bubble dragged over this delete area would be
     * deleted if dropped on this component.
     * This property is not updated after the block or bubble is deleted.
     */
    protected wouldDelete_: boolean;
    /**
     * The unique id for this component that is used to register with the
     * ComponentManager.
     */
    id: string;
    /**
     * Constructor for DeleteArea. Should not be called directly, only by a
     * subclass.
     */
    constructor();
    /**
     * Returns whether the provided block or bubble would be deleted if dropped on
     * this area.
     * This method should check if the element is deletable and is always called
     * before onDragEnter/onDragOver/onDragExit.
     *
     * @param element The block or bubble currently being dragged.
     * @param couldConnect Whether the element could could connect to another.
     * @returns Whether the element provided would be deleted if dropped on this
     *     area.
     */
    wouldDelete(element: IDraggable, couldConnect: boolean): boolean;
    /**
     * Updates the internal wouldDelete_ state.
     *
     * @param wouldDelete The new value for the wouldDelete state.
     */
    protected updateWouldDelete_(wouldDelete: boolean): void;
}
//# sourceMappingURL=delete_area.d.ts.map