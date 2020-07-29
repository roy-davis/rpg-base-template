import * as React from 'react';
import * as ReactDOM from "react-dom";
import SvgSprite from '../SvgSprite';
import './modal.css';

export type ModalProps = {
    children: React.ReactNode;
    onDismiss: (event: React.MouseEvent) => any;
    className: string;
};

export type ModalState = any;

export class Modal extends React.Component<ModalProps, ModalState> {

    private injectedDiv: HTMLDivElement;
    private modalBody: React.ReactNode;
    private modalRoot: HTMLElement;

    public constructor (props: ModalProps) {
        super(props);

        this.modalRoot = document.getElementById("modal-portal") || document.createElement("div");
        
        this.injectedDiv = document.createElement("div");
        this.injectedDiv.classList.add("modal-container");

        this.modalBody = <>
            <div className="curtain" onClick={this.props.onDismiss} ></div>
            <div className={`modal ${this.props.className}`}>
                <SvgSprite icon="close" width={12} onClick={this.props.onDismiss} />
                {this.props.children}
            </div>
        </>;

    }

    public componentDidMount (): void {
        this.modalRoot.appendChild(this.injectedDiv);
    }

    public componentWillUnmount (): void {
        this.modalRoot.removeChild(this.injectedDiv);
    }

    public render (): React.ReactElement<ModalProps> {
        return ReactDOM.createPortal(this.modalBody, this.injectedDiv)
    }
}

