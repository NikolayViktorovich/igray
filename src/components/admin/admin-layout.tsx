'use client'

import { BringToFront } from 'lucide-react'

import { Button } from '@/shared/shadcn-ui/button'
import {
	Sidebar,
	SidebarContent,
	SidebarInset,
	SidebarProvider,
	SidebarTrigger
} from '@/shared/shadcn-ui/sidebar'

interface AdminLayoutProps {
	children: React.ReactNode
}

const menuItems = [
	{ icon: BringToFront, label: 'Список заказов', href: '#' }
	// { icon: User, label: 'Profile', href: '#' },
	// { icon: Settings, label: 'Settings', href: '#' },
	// { icon: HelpCircle, label: 'Help', href: '#' }
]

export const AdminLayout = (props: AdminLayoutProps) => {
	const { children } = props

	return (
		<>
			{/* <div>
				<SidebarProvider>
					<Sidebar>
						<SidebarHeader />
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map(item => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											isActive={true}
										>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
						<SidebarFooter />
					</Sidebar>
					<main className='p-4 w-full'>
						<SidebarTrigger />

						{children}
					</main>
				</SidebarProvider>
			</div> */}

			<SidebarProvider>
				<div className='flex h-screen'>
					<Sidebar className='hidden md:flex'>
						<SidebarContent>
							<div className='space-y-4 py-4'>
								{menuItems.map(item => (
									<Button
										key={item.label}
										variant='ghost'
										className='w-full justify-start'
										asChild
									>
										<a href={item.href}>
											<item.icon className='mr-2 h-4 w-4' />
											{item.label}
										</a>
									</Button>
								))}
							</div>
						</SidebarContent>
					</Sidebar>
					<SidebarInset className='flex-1'>
						<header className='flex items-center h-16 px-4 border-b'>
							<SidebarTrigger className='md:hidden' />
							<h1 className='text-xl font-bold'>My App</h1>
						</header>
						<main className='p-4'>{children}</main>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</>
	)
}
