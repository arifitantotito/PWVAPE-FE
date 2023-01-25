export default function Dashboard(){

    return(
        <div>
            <div className="grid grid-cols-7 h-screen">
                <div className="flex flex-col col-span-2 pt-10 pb-10 justify-between">
                    <div className="grid gap-11">
                        <div className="py-5">
                            Product
                        </div>
                        <div className="py-5">
                            Sales
                        </div>
                        <div className="py-5">
                            User
                        </div>
                    </div>
                    <div className="py-5">
                        Logout
                    </div>
                </div>
                <div className="col-span-5">
                    Content
                </div>
            </div>
        </div>
    )
}