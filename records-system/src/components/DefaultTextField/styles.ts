import { TextField, styled } from '@mui/material'

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#000', // Define a cor de fundo preta
    color: '#fff' // Define a cor do texto como branco
  },
  '& .MuiInputLabel-root': {
    color: '#fff' // Define a cor do rótulo como branco
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff' // Define a cor da borda como branco
  },
  '& .MuiIconButton-root': {
    color: '#fff' // Define a cor do ícone como branco
  }
}))
