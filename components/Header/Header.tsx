import { useState } from 'react'
import { Search } from '@material-ui/icons'
import IconButton from '../IconButton/IconButton'
import Input from '../Input'
import { HeaderWrapper } from './header.styles'

const Header: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <HeaderWrapper id="header">
      <Input
        name="search-bar"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ borderRadius: '4px 0px 0px 4px' }}
        wrapperClassName="search-container"
      />
      <IconButton icon={Search} style={{ borderRadius: '0px 4px 4px 0px' }} />
    </HeaderWrapper>
  )
}

export default Header
