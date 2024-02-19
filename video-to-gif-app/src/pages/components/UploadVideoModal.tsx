import { Modal } from "antd";

interface UploadVideoModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}
export default function UploadVideoModal({ onClose, onConfirm, open }: UploadVideoModalProps) {
  return <Modal
    open={open}
    onCancel={onClose}
    onOk={onConfirm}
    title="Upload video"
  >

  </Modal>
}