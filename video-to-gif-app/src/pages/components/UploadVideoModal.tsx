import { Alert, Input, Modal } from "antd";
import { uploadVideo } from "../../api/api";
import { useState } from "react";
import { CheckOutlined, CloseOutlined, PaperClipOutlined } from "@ant-design/icons";

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
          setErrorMessage(undefined)
          setFile(undefined);
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
    onCancel={() => {
      setErrorMessage(undefined);
      setFile(undefined);
      onClose()
    }}
    onOk={handleUploadVideo}
    title="Upload video"
    confirmLoading={loading}
    cancelButtonProps={{ icon: <CloseOutlined /> }}
    okButtonProps={{ icon: <CheckOutlined /> }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Input
        disabled={loading}
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e?.currentTarget?.files?.[0])}
        prefix={<PaperClipOutlined style={{ color: '#AAA' }} />}
        onClick={(e) => e.currentTarget.files = null}
      />
      {errorMessage && <Alert showIcon type="error" message={errorMessage} />}
    </div>
  </Modal>
}