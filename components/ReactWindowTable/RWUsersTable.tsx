import { FixedSizeList as List } from 'react-window'

type Props = {
  height: number
  data: []
}

export default function RWUsersTable({ height, data }: Props) {
  const Row = ({ index, style }) => <div style={style}>Row {index}</div>

  const Example = () => (
    <List width="100%" height={height} itemCount={data.length} itemSize={35}>
      {Row}
    </List>
  )
  return Example()
}
