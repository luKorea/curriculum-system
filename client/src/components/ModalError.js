import {Modal} from "antd";

export function ModalError(title, content) {
    const modal = Modal.error({
        title,
        content,
    });
    setTimeout(() => {
        modal.destroy();
    },  2000);
}

