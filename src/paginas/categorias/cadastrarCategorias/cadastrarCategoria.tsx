import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './cadastrarCategoria.css';
import { buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import  TokenState  from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../model/Categoria';


function CadastroCategoria() {
    let navigate = useNavigate();
    const { id_categoria } = useParams<{id_categoria: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [categoria, setCategoria] = useState<Categoria>({
        id_categoria: 0,
        moveis:'',
        ambiente: ''
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id_categoria !== undefined){
            findById(id_categoria)
        }
    }, [id_categoria])

    async function findById(id_categoria: string) {
        buscaId(`/categorias/${id_categoria}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria " + JSON.stringify(categoria))
    
            if (id_categoria !== undefined) {
                console.log(categoria)
                put(`/categorias/atualizar`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            } else {
                post(`/categorias/cadastrar`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
            back()
    
        }
    
        function back() {
            navigate('/categorias')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro Categoria</Typography>
                <TextField value={categoria.moveis} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Móveis" variant="outlined" name="moveis" margin="normal" fullWidth />
                <TextField value={categoria.ambiente} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Ambiente" variant="outlined" name="ambiente" margin="normal"  fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;