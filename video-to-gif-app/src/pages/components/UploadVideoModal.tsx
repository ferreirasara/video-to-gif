import { Alert, Input, InputRef, Modal, Space } from "antd";
import { uploadVideo } from "../../api/api";
import { useRef, useState } from "react";

interface UploadVideoModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}
export default function UploadVideoModal({ onClose, onConfirm, open }: UploadVideoModalProps) {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleUploadVideo = async () => {
    setLoading(true);
    if (file) {
      try {
        const res = await uploadVideo(file);
        if (res?.id) {
          onConfirm();
        } else {
          setErrorMessage(res?.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    setLoading(false);
  }

  return <Modal
    open={open}
    onCancel={onClose}
    onOk={handleUploadVideo}
    title="Upload video"
    confirmLoading={loading}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Input
        disabled={loading}
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e?.currentTarget?.files?.[0])}
      />
      {errorMessage && <Alert showIcon type="error" message={errorMessage} />}
    </div>
  </Modal>
}