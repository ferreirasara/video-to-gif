import { Button, Card, Space } from "antd";
import UploadVideoModal from "./components/UploadVideoModal";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Gif, getGifsByUserId } from "../api/api";
import GifsList from "./components/GifsList";

export default function Root() {
  const [uploadVideoModalOpen, setUploadVideoModalOpen] = useState<boolean>(false);
  const [fetchGifsLoading, setFetchGifsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Gif[]>();

  const userId = localStorage?.getItem('user_id');

  const handleLogout = () => {
    localStorage?.removeItem('user_id');
    window.location.reload()
  }

  const fetchGifs = async () => {
    if (!userId || fetchGifsLoading) return;

    setFetchGifsLoading(true);
    try {
      const res = await getGifsByUserId();
      if (res?.length) {
        setTableData(res);
      }
    } catch (e) {
      console.log(e)
    }
    setFetchGifsLoading(false);
  }

  // eslint-disable-next-line
  useEffect(() => { fetchGifs() }, [])

  if (!userId) return <Navigate to="/login" replace={true} />

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
      <GifsList
        gifs={tableData || []}
        loading={fetchGifsLoading}
      />
    </Card>
    <UploadVideoModal
      open={uploadVideoModalOpen}
      onClose={() => setUploadVideoModalOpen(false)}
      onConfirm={() => {
        setUploadVideoModalOpen(false)
        fetchGifs()
      }}
    />
  </>
}