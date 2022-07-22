import styled from "styled-components";

export const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`

export const ContainerFiltro = styled.div`
   display: flex;
   flex-direction: column;
   width: 200px;
   margin: 30px;
   padding: 30px;
   
`
