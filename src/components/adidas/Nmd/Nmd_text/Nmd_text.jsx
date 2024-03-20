import Classes from '../Nmd.module.scss'

const Nmd_text = () => {
  return (
    <div className={Classes.Nmd_text}>
        <div className={Classes.text}>
            <h1 className={Classes.title}>ADIDAS NMD</h1>
            <p>стиль и комфорт для активных людей.</p>
        </div>
        <img className={Classes.preview_img} src='imgs\NMD\NMD_preview.png' alt="" />
    </div>
  )
}

export default Nmd_text