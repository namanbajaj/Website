import sitemap from './assets/sitemap.xml'

const Sitemap = () => {
  return (
    <iframe
      src={sitemap}
      title="Sitemap"
      style={{ width: '100%', height: '80vh', border: 'none' }}
    />
  )
}

export default Sitemap;