import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { isUndefined } from '../utils/utils';

interface StcChipCloseEvent {
    image: string;
    text: string;
    closeable: boolean;
    id: string;
}

@Component({
    tag: 'stc-chip',
    styleUrl: 'chip.scss'
})
export class StcChip {

    @Prop()
    id: string;

    @Prop()
    image: string;

    @Prop()
    text: string;

    @Prop()
    closeable: boolean = false;

    @Event({ eventName: 'stc-chip-close' })
    close: EventEmitter;

    onClose() {
        const event: StcChipCloseEvent = {
            image: this.image,
            text: this.text,
            closeable: this.closeable,
            id: this.id
        };

        this.close.emit(event);
    }

    render() {

        const hasImage = !!this.image && !isUndefined(this.image);

        const image = (() => {
            if (!hasImage) {
                return;
            }

            return (
                <div class="stc-chip-image">
                    <img src={this.image} />
                </div>
            );
        })();

        const close = (() => {
            if (this.closeable) {
                return <span class="stc-chip-close" onClick={this.onClose.bind(this)}>X</span>;
            }
        })();

        const chipClasses = {
            'stc-chip': true,
            'stc-chip-extra-pd-lt': hasImage
        };

        return (
            <div class={chipClasses}>
                {image}
                <span class="stc-chip-text">{this.text}</span>
                {close}
            </div>
        );
    }
}
