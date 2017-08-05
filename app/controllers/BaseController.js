class BaseController {
  constructor() {
    this.view_data = {}
  }

  renderView (res, file, data = {}) {
    Object.assign(this.view_data, data)
    res.render(file, this.view_data)
  }
}

module.exports = BaseController