module.exports = {
  index: (req, res) => {
    const servicos = [
      {nome: 'desenvolvimento web', imagem: 'imagens/undraw_dev_focus.svg'},
      {nome: 'Marketing Digital', imagem:  'imagens/undraw_social_dashboard.svg'},
      {nome: 'Consultoria UX', imagem: 'imagens/undraw_mobile_apps.svg'}
    ]
    const banner = [
       'imagens/banner.jpg',
       'imagens/img2.jpg',
       'imagens/img3.jpg',
       'imagens/img4.jpg'
    ]
    res.render('index', {title: 'Home', listaServico: servicos, listBanner: banner})
  }
}