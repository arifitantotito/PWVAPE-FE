export default function Login(){
    return(
        <div>
            <div className="py-5 text-5xl">
                Welcome to <span className="pwvape-color font-bold">PWVAPE</span>
            </div>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-bold text-gray-900 dark:text-white">Sign in as a <span className="pwvape-color font-bold">PWVAPE</span>'s Cashier</h5>
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Insert username here" required/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>
                        <button type="submit" className="submit-button w-full text-white pwvape-bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:pwvape-bg dark:focus:ring-blue-800">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}