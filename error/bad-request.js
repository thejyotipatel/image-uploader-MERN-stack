import { StatusCodes } from 'http-status-code'
import CustomAPIError from './custom-api'

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestError
