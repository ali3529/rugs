import Link from 'next/link'
import { useRouter } from 'next/router'

function Breadcrumbs({ collection, sku }) {
    const router = useRouter()
    return (
        <div className="px-4 sm:px-6 lg:px-8 hidden sm:block">
            <small className="font-light text-xs mt-4 pt-4 space-x-1">
                <a className="mx-2" onClick={() => router.back()}>
                    <span className="hover:underline cursor-pointer mx-1">
                        Back
                    </span>
                </a>
                <Link href="/">
                    <span className="hover:underline cursor-pointer ml-1">
                        All Rugs
                    </span>
                </Link>

                <span>{'/'}</span>
                {collection ? (
                    <>
                        <span className="hover:underline cursor-pointer">
                            {collection}
                        </span>

                        <span>{'/'}</span>
                    </>
                ) : (
                    ''
                )}
                <span className="font-bold">#{sku}</span>
            </small>
        </div>
    )
}

export default Breadcrumbs
