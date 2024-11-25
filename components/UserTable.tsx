'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface User {
  id: number
  name: string
  email: string
  balance: number
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit user with id: ${id}`)
  }

  const handleAddMoney = (id: number) => {
    // Implement add money functionality
    console.log(`Add money to user with id: ${id}`)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>${user.balance.toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleEdit(user.id)} className="mr-2">
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleAddMoney(user.id)}>
                  Add Money
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

