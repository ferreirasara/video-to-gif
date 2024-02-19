import { Button, Card, Space } from "antd";
import UploadVideoModal from "./components/UploadVideoModal";
import { useState } from "react";
import { Navigate, redirect } from "react-router-dom";

export default function Root() {
  const [uploadVideoModalOpen, setUploadVideoModalOpen] = useState<boolean>(false);

  const userId = localStorage?.getItem('user_id');
  if (!userId) return <Navigate to="/login" replace={true} />

  const handleLogout = () => {
    localStorage?.removeItem('user_id');
    window.location.reload()
  }

  return <>
    <Card
      title="Video to GIF"
      extra={<Space>
        <Button
          onClick={() => setUploadVideoModalOpen(true)}
          type="primary"
        >
          Upload video
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Space>
      }
      style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}
      styles={{ body: { flex: 1, overflowY: 'auto' } }}
    >
      Content
    </Card>
    <UploadVideoModal
      open={uploadVideoModalOpen}
      onClose={() => setUploadVideoModalOpen(false)}
      onConfirm={() => setUploadVideoModalOpen(false)}
    />
  </>

}