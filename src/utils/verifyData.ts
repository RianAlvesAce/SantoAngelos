import InfoService from "../services/InfoService"

export default (async () => {
  if(!localStorage.getItem('info')) {
    localStorage.setItem('info', JSON.stringify(await InfoService.getAll()))
  }
})()