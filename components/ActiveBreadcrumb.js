import { useRouter } from 'next/router'
import { Breadcrumb } from 'antd'

function ActiveBreadcrumb() {
  const router = useRouter()
  const routes = router.pathname.split('/').slice(1)
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        routes.map((route, index) => 
          <Breadcrumb.Item key={index}>{route}</Breadcrumb.Item>
        )
      }
    </Breadcrumb>
  )
}

export default ActiveBreadcrumb