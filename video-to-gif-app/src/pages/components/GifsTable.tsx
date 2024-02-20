import { Button, Table } from "antd";
import { Gif } from "../../api/api";
import { ColumnsType } from "antd/es/table";
import { formatBytes, formatDateHour } from "../../utils/utils";
import { DownloadOutlined } from "@ant-design/icons";

interface GifsTableProps {
  tableData: Gif[]
  loading: boolean
  refetch: () => void
}
export default function GifsTable({ tableData, loading, refetch }: GifsTableProps) {
  const columns: ColumnsType<Gif> = [
    { title: 'Name', dataIndex: 'name' },
    {
      title: 'Size',
      dataIndex: 'size',
      render: (size) => formatBytes(size)
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      render: (createdAt) => formatDateHour(createdAt)
    },
    {
      title: 'URL',
      dataIndex: 'url',
      render: (url) => url && <Button icon={<DownloadOutlined />} shape="circle" size="small" href={url} referrerPolicy="no-referrer" />,
    },
  ]

  return <Table
    size="small"
    columns={columns}
    rowKey={'id'}
    dataSource={tableData}
    loading={loading}
    footer={() => <Button type="text" onClick={refetch}>Reload</Button>}
  />
}