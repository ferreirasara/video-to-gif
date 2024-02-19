import { Button, Card, Space } from "antd";
import UserButton from "./components/UserButton";
import UploadVideoModal from "./components/UploadVideoModal";
import { useState } from "react";

export default function Root() {
  const [uploadVideoModalOpen, setUploadVideoModalOpen] = useState<boolean>(false);

  const userId = localStorage?.getItem('user_id');
  // if (!userId) return <Navigate to="/login" replace={true} />

  return <>
    <Card
      title="Video to GIF"
      extra={<Space>
        <Button onClick={() => setUploadVideoModalOpen(true)}>Upload video</Button>
        <UserButton />
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