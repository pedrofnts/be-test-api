export class ErrorHandler {
  constructor() {}

  static getError(error: any): any | undefined {
    const err = error as any;

    if (err.response?.status === 404) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    if (error) {
      return {
        status: 500,
        message: error,
      };
    }
  }
}
