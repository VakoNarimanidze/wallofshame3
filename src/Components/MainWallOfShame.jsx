import { useState } from "react"
import TableWallOfShame from "./TableWallOfShame"
import styled from "styled-components"

const MainWallOfShameContainer = styled.div`
    background: white;
    height: 493px;
    width: 1180px;
    border-radius: 12px;
    margin: 0 auto;
    margin-top: 150px;
`
const H1 = styled.h1`
    width: 198px;
    height: 22px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 21px;

    color: rgba(33, 33, 33, 1);
    margin: 32px 0 0 26px;
`

const H5 = styled.h5`
    width: 70px;
    height: 21px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    color: #B5B5C3;
    margin: 7px 0 0 32px;

`
const Inputs = styled.div`
    height: 48px;
    width: 300px;
    left: 0px;
    top: 28px;
    border-radius: 5px;
    padding: 10px 15px 10px 15px;
    margin-left: 109px ;
    margin-top: 28px;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
    border: 1px solid rgba(226, 225, 229, 1)
`
const Flex = styled.div`
display:flex
`

const SecondInput = styled.input`
margin-left: 30px;
`
export default function MainWallOfShame({ users }) {
    const [name, setName] = useState('')
    const [excuse, setExcuse] = useState('')
    const [usersArray, SetUsersArray] = useState(users)
    

    function Click() {
        if (name.trim() !== '' && excuse.trim() !== '') {
            let id = usersArray.length;
            SetUsersArray((prev) => [...prev, {
                id: id++,
                name: name,
                excuse: excuse,
                count: 1,
                
            }
            ])
            setName('')
            setExcuse('')
        }
    }

    return (
        <MainWallOfShameContainer>
            <Flex>
                <div>
                <H1>Wall Of Shame</H1>
                <H5>{usersArray.length } members</H5>
            </div>
            <Inputs>
                <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} value={name} />
                <SecondInput type="text" placeholder="Excuse" onChange={(event) => setExcuse(event.target.value)} value={excuse} />
                </Inputs>
                <div className="button">
                    <button onClick={Click}>Create</button>
                </div>
            </Flex>
            <TableWallOfShame
                users={usersArray}
                setUsersArray={SetUsersArray}
            />
        </MainWallOfShameContainer>
    )
}