import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function UsersManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Protect the layout from users who are not admins
  const isAdmin = await checkRole('admin')
  if (!isAdmin) {
    redirect('/')
  }

  return <>{children}</>
}