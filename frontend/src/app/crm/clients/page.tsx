'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Mail, Phone, MapPin, Eye } from 'lucide-react'
import Link from 'next/link'

const mockClients = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@acme.com',
    phone: '+1 234 567 8900',
    company: 'Acme Corporation',
    address: '123 Business St, New York, NY 10001',
    country: 'United States',
    referral: 'LinkedIn',
    contactPerson: 'Sarah Johnson',
    status: 'Active',
    revenue: 125000
  },
  {
    id: 2,
    name: 'Emma Wilson',
    email: 'emma.w@techvision.co.uk',
    phone: '+44 20 7123 4567',
    company: 'TechVision Ltd',
    address: '45 Tech Park, London, UK',
    country: 'United Kingdom',
    referral: 'Referral',
    contactPerson: 'Michael Brown',
    status: 'Active',
    revenue: 98000
  },
  {
    id: 3,
    name: 'Carlos Rodriguez',
    email: 'c.rodriguez@global.com',
    phone: '+1 416 555 9876',
    company: 'Global Solutions',
    address: '789 Enterprise Blvd, Toronto, ON',
    country: 'Canada',
    referral: 'Website',
    contactPerson: 'Lisa Chen',
    status: 'Inactive',
    revenue: 87000
  },
  {
    id: 4,
    name: 'Anna Mueller',
    email: 'a.mueller@innovation.de',
    phone: '+49 30 1234 5678',
    company: 'Innovation Labs',
    address: '12 Innovation Str, Berlin, Germany',
    country: 'Germany',
    referral: 'Trade Show',
    contactPerson: 'Thomas Schmidt',
    status: 'Active',
    revenue: 76000
  },
  {
    id: 5,
    name: 'David Lee',
    email: 'david.lee@digital.au',
    phone: '+61 2 9876 5432',
    company: 'Digital Dynamics',
    address: '567 Digital Ave, Sydney, NSW',
    country: 'Australia',
    referral: 'LinkedIn',
    contactPerson: 'Jennifer White',
    status: 'Active',
    revenue: 65000
  }
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [clients, setClients] = useState(mockClients)

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Clients</h1>
          <p className="text-muted-foreground mt-2">Manage your client relationships</p>
        </div>
        <Link href="/crm/clients/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Client
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clients by name, company, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{clients.length}</div>
            <p className="text-sm text-muted-foreground">Total Clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{clients.filter(c => c.status === 'Active').length}</div>
            <p className="text-sm text-muted-foreground">Active Clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">${(clients.reduce((sum, c) => sum + c.revenue, 0) / 1000).toFixed(0)}k</div>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
          </CardContent>
        </Card>
      </div>

      {/* Clients List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredClients.map((client) => (
          <Card key={client.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{client.name}</h3>
                      <p className="text-sm text-muted-foreground">{client.company}</p>
                    </div>
                    <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                      {client.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{client.country}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Referral: </span>
                      <Badge variant="outline">{client.referral}</Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Contact Person: </span>
                      <span className="font-medium">{client.contactPerson}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Revenue: </span>
                      <span className="font-semibold text-green-600">${client.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/crm/clients/${client.id}`}>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center py-12">
            <p className="text-muted-foreground">No clients found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}