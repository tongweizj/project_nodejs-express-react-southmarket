import { Link } from "react-router-dom";
import { useSignin } from "@/features/auth/hooks/useSignin";

export default function Signin() {
  const {
    values,
    snackbar,
    handleChange,
    submitSignin,
    submitResetPassword,
    closeSnackbar,
  } = useSignin();

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">欢迎回来</h1>
        <p className="text-gray-600 text-center mb-8">登录您的账户</p>
        {/* 登录表单 */}
        {/* <LoginForm
                    onSubmit={handleLogin}
                    isLoading={isLoading}
                /> */}
        <form onSubmit={(e) => {
          e.preventDefault();
          submitSignin();
        }} className="space-y-6">
          <div>
            <input
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="邮箱地址"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              placeholder="密码"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">记住我</span>
            </label>

            <Link to="/auth/forgot-password" className="text-blue-600 hover:underline text-sm">
              忘记密码?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            登录
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            还没有账户?{' '}
            <Link to="/auth/signup" className="text-blue-600 font-medium hover:underline">
              立即注册
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
