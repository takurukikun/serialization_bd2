/* eslint-disable no-console */
import Row from 'components/Bootstrap/Row'
import Button from 'components/Form/Button'
import Input from 'components/Form/Input'
import Table from 'components/Table'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

const Serialization: React.FC = () => {
  interface IData {
    query: string
  }

  const { control, handleSubmit } = useForm()

  const columns = [
    { dataField: 'id', text: '#', hidden: true },
    { dataField: '2pl', text: '2PL', sort: true },
    { dataField: '2plp', text: '2PL Preciso', sort: true },
    { dataField: '2v2pl', text: '2V2PL', sort: true },
    { dataField: 'serialization', text: 'Serialization', sort: true },
    { dataField: 'readCommit', text: 'Read-Commit', sort: true },
  ]

  const checkIntergrity = (query: string): boolean => {
    let bool = false
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const ops = ['x', 'y', 'z', 'u', 'v']
    for (let i = 0; i < query.length; ) {
      if (query[i] === 'r' || query[i] === 'w') {
        if (query[i + 1] === 'r' || query[i + 1] === 'w') {
          return false
        }
        if (ops.includes(query[i + 1])) {
          if (nums.includes(query[i + 2])) {
            bool = true
            i += 3
          } else {
            return false
          }
        } else {
          return false
        }
      } else if (query[i] === 'c') {
        if (nums.includes(query[i + 1])) {
          i += 2
          bool = true
        } else return false
      } else {
        return false
      }
    }
    return bool
  }

  const getQtde = (query: string): number => {
    let maior = 0
    query
      .replace(/[^0-9]/gm, '')
      .split('')
      .forEach((e) => {
        if (parseInt(e, 10) >= maior) maior = parseInt(e, 10)
      })
    return maior
  }

  const toArraySplited = (query: string): string[] => {
    const result: string[] = []
    for (let i = 0; i < query.length; ) {
      if (query[i] === 'r' || query[i] === 'w') {
        result.push(query.slice(i, i + 3))
        i += 3
      } else {
        result.push(query.slice(i, i + 2))
        i += 2
      }
    }

    return result
  }

  const last2plp = (query: string[]): string => {
    return 'rx4'
  }

  const bloqueio2plp = (query: string): string[] => {
    const result = query
    const array = toArraySplited(query)

    array.forEach((e, i) => {
      if (e === last2plp(array)) array.splice(2, 0, `br${e[2]}`)
    })
    return array
  }

  const onSubmitSerializar = (data: IData): void => {
    if (!checkIntergrity(data.query))
      toast.error('Erro nas transações inseridas.')
    else {
      const qtde = getQtde(data.query)
      console.log(bloqueio2plp(data.query))
    }
  }

  return (
    <Card>
      <Card.Header style={{ textAlign: 'center' }}>Serialização</Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmitSerializar)}>
          <Row>
            <Controller
              name="query"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  label="Nome"
                  id={field.name}
                  placeholder="rx1rx2wx2wy1ry3wy3c1rx2c3c2"
                  type="text"
                  sm="9"
                  md="9"
                  lg="9"
                  xl="11"
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Button
              divClass="d-flex align-items-end"
              className="btn btn-outline-success w-100"
              type="submit"
              sm="3"
              md="3"
              lg="3"
              xl="1"
            >
              Ir
            </Button>
          </Row>
        </form>
        <Row>
          <Table
            keyField="id"
            columns={columns}
            data={[
              {
                id: '5',
                '2pl': 'Serializável',
                '2v2pl': 'Deadlock em T3, T2',
                '2plp': 'Serializável',
                serialization: 'Deadlock em T1, T2',
                readCommit: 'Serializável',
              },
            ]}
          />
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Serialization
