import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Gamepad Tester – Test Controller & Joystick Online",
  description: "Test gamepads and controllers online with our free tool. Supports PS4, PS5, Xbox, and more. Check buttons, sticks, and triggers in real time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="ewOW-hExi2QpgK3QJXBosdOy4Q2TggFKBqp88NSDn_8" />
        <title>Gamepad Tester – Test Controller & Joystick Online</title>
      </head>
      <body>
        <div id="root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}