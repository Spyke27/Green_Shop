import FormControl from '@mui/material/FormControl'
import './Menu.css'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

function MenuBarrinha() {
    return (
        <>
            <nav className='menu'>

                <input type="checkbox" className="menu-faketrigger" />
                <div className="menu-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <ul>

                    <li className="pesquisa2">
                        <FormControl variant="standard" color='success' >
                            <Input placeholder="Buscar Produtos" startAdornment={<InputAdornment position="start"><SearchIcon className="lupa2" /></InputAdornment>} />
                        </FormControl>
                    </li>

                    <li><b>PRODUTOS</b></li>
                    <li><b>CATEGORIAS</b></li>
                    <li><b>PROMOÇÕES</b></li>
                    <li><b>MÓVEIS</b></li>
                    <li><b>DECORAÇÃO</b></li>
                    <li><b>BLOG</b></li>

                </ul>

            </nav>
        </>
    )
}
export default MenuBarrinha