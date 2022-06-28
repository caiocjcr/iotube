import { ErrorNoticeWrapper } from './errorNotice.styles'

type ErrorNoticeProps = {
  message?: string
}

const ErrorNotice: React.FC<ErrorNoticeProps> = ({
  message = ' An unexpected error occurred.',
}) => (
  <ErrorNoticeWrapper>
    <span className="sad">:(</span>
    <br /> {message}
  </ErrorNoticeWrapper>
)

export default ErrorNotice
