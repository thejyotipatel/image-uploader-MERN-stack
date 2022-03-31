import { StatusCodes } from 'http-status-code'
import CustomAPIError from './custom-api'

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

export default NotFoundError
