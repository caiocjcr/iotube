import { ErrorNoticeWrapper } from './errorNotice.styles'

const ErrorNotice: React.FC = () => (
  <ErrorNoticeWrapper>
    <span className="sad">:(</span>
    <br /> An unexpected error occurred.
  </ErrorNoticeWrapper>
)

export default ErrorNotice
