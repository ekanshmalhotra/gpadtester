import styles from './MainPageInfo.module.css';

export function MainPageInfo() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h1 className={styles.title}>Web-Based Gamepad Tester for PS4, PS5, Xbox and More</h1>
        <article className={styles.article}>
          Our web-based gamepad tester is an online browser tool that helps you check if your game controller is working properly.
          It reads controller inputs, tracks real-time commands, measures latency, and shows how joysticks and triggers respond without installing any software or drivers.
          Just plug in your PS5, Xbox, Nintendo Switch, or PC controller, open the tool, and start testing.
          <br /><br />
          Gamers, developers, and streamers use this gamepad controller tester. Gamers check for stick drift, unresponsive triggers, or faulty buttons. Developers use it to validate input across platforms. Streamers rely on them to display live inputs during gameplay. If you're diagnosing problems or checking calibration, our browser-based tester saves time and avoids unnecessary replacements.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>How Online Gamepad Testers Work in Your Browser</h2>
        <article className={styles.article}>
          The Gamepad API is a built-in feature in modern browsers that allows users to detect and communicate with connected controllers.
          It supports DualSense, PS3, PS4, PS5, Xbox controllers, and various third-party USB gamepads. Once a controller is plugged in via Bluetooth or USB, the browser automatically begins polling the device for input signals.
          <br /><br />
          Each control element, like buttons, analog sticks, and triggers, sends numeric values that indicate its current state. For instance, a fully pressed trigger typically reads as 1.0, while a centered joystick rests at 0.0. This data is captured through a process called input mapping, which identifies and labels each input based on the controller's specific structure.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Why Choose Our Web Gamepad Tool Over Software</h2>
        <article className={styles.article}>
          Traditional controller testing tools often require software installation, which can create compatibility issues or slow down performance. Here is a comparison table of our tester vs software to understand the differences:-
          <br /><br />
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Method</th>
                <th>Requires installation?</th>
                <th>Supports PS5?</th>
                <th>Shows Input Lag?</th>
                <th>Free?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Our Web-Based Gamepad Tester</td>
                <td className={styles.No}>No</td>
                <td className={styles.Yes}>Yes</td>
                <td className={styles.Yes}>Yes</td>
                <td className={styles.Yes}>Yes</td>
              </tr>
              <tr>
                <td>DS4Windows</td>
                <td className={styles.Yes}>Yes</td>
                <td className={styles.Yes}>Yes</td>
                <td className={styles.Partial}>Partial</td>
                <td className={styles.Yes}>Yes</td>
              </tr>
              <tr>
                <td>Console Calibration</td>
                <td className={styles.No}>No</td>
                <td className={styles.Yes}>Yes</td>
                <td className={styles.No}>No</td>
                <td className={styles.Yes}>Yes</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>


      <section className={styles.section}>
        <h2 className={styles.title}>Unique Features of Our Online Gamepad Tester</h2>
        <article className={styles.article}>
          <strong>1. Real-Time Input Visualization</strong><br />
          See every button press, joystick movement, and trigger squeeze reflected instantly on-screen. It is perfect for diagnosing stick drift, input lag, or faulty buttons with zero delay.
          <br /><br />
          <strong>2. No Installation or Drivers Required</strong><br />
          You can test your controller directly in the browser—no downloads, no setup, no admin permissions. Works on Chrome, Edge, Firefox, and Opera.
          <br /><br />
          <strong>3. Universal Compatibility</strong><br />
          Supports DualSense (PS5), DualShock (PS4), Xbox Series, Xbox One, Switch Pro, and most generic USB or Bluetooth controllers on PC, macOS, Linux, and Chromebook.
          <br /><br />
          <strong>4. Input Latency Metrics</strong><br />
          Our gamepad tester measures and compares input lag in milliseconds, displaying minimum, maximum, and average values in real-time.
          <br /><br />
          <strong>5. Drift & Deadzone Detection</strong><br />
          Visually identify joystick drift, dead zones, or uneven axis alignment. Helps detect problems before they affect your gameplay.
          <br /><br />
          <strong>6. Vibration Test Support</strong><br />
          Trigger and test haptic motors to verify if your controller's vibration is functional—a feature not available in many web-based tools.
          <br /><br />
          <strong>7. Secure & Lightweight</strong><br />
          Our tool runs entirely in-browser with no data collection, making it safe for use on shared computers, school labs, or work machines.
          <br /><br />
          <strong>8. Ideal for Streamers and Devs</strong><br />
          Compatible with gamepad viewers and overlays—streamers can display inputs live in OBS, and developers can use it for real-time debugging.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>What Is Stick Drift?</h2>
        <article className={styles.article}>
          Stick drift is when your controller's joystick moves your character or camera without you touching it. It happens due to wear in sensors, dirt buildup, or hardware fatigue, and affects most modern controllers, including PS5, Xbox, and Nintendo Switch.
        </article>
      </section>

      <section className={styles.section} id='info'>
        <h2 className={styles.title}>How to Check for Stick Drift (PS5, Xbox, PC)</h2>
        <article className={styles.article}>
          Follow these steps to test if your controller has stick drift:
          <br /><br />
          <strong>Connect Your Controller</strong><br />
          Plug your controller into your PC or console using a USB cable or connect it via Bluetooth.
          <br /><br />
          <strong>Open a Gamepad Tester</strong><br />
          Launch our web-based gamepad tester in a supported browser like Chrome, Firefox, or Edge.
          <br /><br />
          <strong>Don't Touch the Sticks</strong><br />
          Let the controller sit still. Watch the on-screen tester carefully.
          <br /><br />
          <strong>Look for Movement</strong><br />
          If the joystick marker (dot or crosshair) moves without any input, your controller is drifting.
          Also, check the X and Y axis values. They should both stay at 0.00 when untouched.
          <br /><br />
          <strong>Even Small Values Matter</strong><br />
          Numbers like X: 0.03 or Y: -0.02 may seem minor but still indicate early sensor wear or internal issues.
          <br /><br />
          <strong>Confirm It's Not a Port/Device Problem</strong><br />
          Try the same controller on a different USB port or another device to rule out external causes.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>How to fix stick drift in PS5.</h2>
        <article className={styles.article}>
          To fix stick drift on a PS5 DualSense follow these steps:-
          <br /><br />
          Clean around the analog stick with isopropyl alcohol and a cotton swab.
          <br />
          Recalibrate the controller via Settings ⇒ Accessories ⇒ Controllers.
          <br />
          If drift persists, replace the stick module—especially easy on the DualSense Edge, which supports swappable thumbsticks without soldering.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>How to Fix Drift on Xbox Controllers</h2>
        <article className={styles.article}>
          Start with the Xbox Accessories App to recalibrate sticks and adjust dead zones.
          <br />
          Minor unintended input from idle analog sticks can be masked by increasing the deadzone range.
          <br />
          Switch between wired and wireless modes to rule out Bluetooth interference.
          <br />
          For Xbox Elite Series 2, replace the thumbstick module if needed.
          <br />
          Standard Xbox controllers may require soldering.
          <br />
          Also, install the latest firmware updates to improve input accuracy and reduce lag.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>How to Fix Drift on PS4/PS3</h2>
        <article className={styles.article}>
          On PS4, use Steam Controller Settings to recalibrate input.
          <br />
          For Windows, update drivers through Device Manager.
          <br />
          PS3 controllers need tools like DS3 Tool or ScpToolkit to test and remap inputs.
          <br />
          If cleaning doesn't help, replace the internal stick module using a repair kit.
          <br />
          Be cautious—PS4 and PS3 internals are compact. If you're not confident, visit a controller repair specialist.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>How to fix Faulty and sticky Buttons on a Gamepad</h2>
        <article className={styles.article}>
          Sticky or non-working buttons are usually caused by dirt, worn pads, or minor hardware faults. Follow these steps to fix your gamapad buttons:-
          <br /><br />
          Use a cotton swab with isopropyl alcohol to clean around the buttons. If your controller can be opened, gently clean the rubber pads and contacts inside.
          <br /><br />
          If cleaning doesn't work, check for worn-out rubber domes. These can be replaced with affordable kits available online for PS5, Xbox, or other models.
          <br /><br />
          Still no luck? The issue might be with the internal solder points. Loose or broken connections need re-soldering, which is best done by someone experienced, or take it to a repair shop.
          <br /><br />
          Make sure your controller's firmware and drivers are up to date, as software bugs can sometimes cause input issues.
          <br /><br />
          Once done, test everything using our Online gamepad tester. Press each button and confirm it responds instantly on-screen.
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>How to Calibrate Your Controller (Platform-Specific)</h2>
        <article className={styles.article}>
          <strong>Windows (PC)</strong><br />
          Open Control Panel ⇒ Devices and Printers<br />
          Right-click your controller → select Game Controller Settings<br />
          Go to Properties and launch the Calibration Wizard<br />
          Follow the steps to realign joystick axes and test button response
          <br /><br />
          <strong>Steam (PC)</strong><br />
          Open Big Picture Mode<br />
          Go to Settings ⇒ Controller ⇒ General Controller Settings<br />
          Select your device (PS4, PS5, Xbox, Switch Pro)<br />
          Adjust deadzones, trigger range, and response curves as needed
          <br /><br />
          <strong>PlayStation Consoles (PS5)</strong><br />
          Manual calibration isn't available<br />
          Instead, go to Settings ⇒ Accessories ⇒ Wireless Controller Software<br />
          Apply firmware updates to fix drift, input lag, and sensitivity issues
          <br /><br />
          <strong>Web Gamepad Tester (Cross-Platform)</strong><br />
          Open the online tester in Chrome, Edge, or Firefox<br />
          Visually detect stick drift, dead zones, and misalignment<br />
          Use the tool before and after physical repairs or recalibration
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Maintenance Tips for Longer Controller Life</h2>
        <article className={styles.article}>
          <strong>Cleaning Best Practices</strong><br />
          Wipe down analog sticks and buttons regularly with isopropyl alcohol<br />
          Use a cotton swab to clean around the joystick base<br />
          Rotate the stick gently while cleaning to loosen debris<br />
          Avoid pressing too hard, which can damage internal domes
          <br /><br />
          <strong>Storage Guidelines</strong><br />
          Keep your controller in a cool, dry, and dust-free environment<br />
          Avoid direct sunlight, heat, and moisture exposure
          <br /><br />
          <strong>Battery Care for Wireless Controllers</strong><br />
          Never leave the battery at 0% or 100% for extended periods<br />
          Recharge periodically to maintain battery health
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Conclusion: Test Before You Replace</h2>
        <article className={styles.article}>
          Before replacing your controller, give it a proper test. Most issues—like drift, lag, or dead buttons—can be fixed with a little cleaning or calibration. Use our web-based online gamepad tester to know what's broken and what's not, without wasting money.
        </article>
      </section>


      <section className={styles.section}>
        <h2 className={styles.title}>Top Supported Game Controllers</h2>
        <article className={styles.article}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Controller Name</th>
                <th>Vendor/Product ID</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sony DUALSHOCK 4 Wireless Controller</td>
                <td>054c / 09cc</td>
                <td>Known for accuracy and full vibration support</td>
              </tr>
              <tr>
                <td>Logitech Dual Action USB Gamepad</td>
                <td>046d / c216</td>
                <td>Excellent compatibility with PC games</td>
              </tr>
              <tr>
                <td>PS3 SIXAXIS GamePad</td>
                <td>054c / 0268</td>
                <td>Wired and wireless testing both supported</td>
              </tr>
              <tr>
                <td>Nintendo Switch Pro Controller</td>
                <td>057e / 2009</td>
                <td>Supports gyroscope and analog stick calibration</td>
              </tr>
              <tr>
                <td>Xbox 360 Controller (XInput)</td>
                <td>Standard XInput</td>
                <td>Plug-and-play for most platforms</td>
              </tr>
              <tr>
                <td>Generic USB Gamepad</td>
                <td>0079 / 0006</td>
                <td>Budget-friendly and testable with basic input</td>
              </tr>
              <tr>
                <td>vJoy Virtual Joystick</td>
                <td>1234 / bead</td>
                <td>Great for simulating input during development</td>
              </tr>
              <tr>
                <td>Twin USB Gamepad</td>
                <td>0810 / 0001</td>
                <td>Ideal for multiplayer testing</td>
              </tr>
              <tr>
                <td>Extended Gamepad by Sony</td>
                <td>054c / 0ce6</td>
                <td>Includes touchpad and motion sensors</td>
              </tr>
              <tr>
                <td>Sony Wireless Controller (Alternate Models)</td>
                <td>054c / 05c4 & 0ce6</td>
                <td>Common across PS4 variations</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section className={styles.section} id='faq'>
        <h2 className={styles.title}>FAQs</h2>
        <article className={styles.article}>
          <strong>What causes stick drift?</strong><br />
          Stick drift is caused by worn-out sensors, dirt buildup, or aging analog stick modules. It sends movement input without touching the stick. Cleaning or replacing the module usually fixes it.
          <br /><br />
          <strong>Can I test the PS5 controller online?</strong><br />
          Yes. Use a web-based gamepad tester to check your PS5 DualSense. It works through the browser and shows input data like stick movement, trigger response, and button feedback.
          <br /><br />
          <strong>Why is my controller not connecting?</strong><br />
          Common causes include Bluetooth interference, a faulty USB cable, or outdated drivers. Try reconnecting, switching cables, or testing the controller on a different device to isolate the issue.
          <br /><br />
          <strong>Is web-based testing safe?</strong><br />
          Yes. A web gamepad tester runs entirely in the browser. It doesn't access personal data or require software installation, making it secure and lightweight for quick diagnostics.
          <br /><br />
          <strong>Does this tool work with Android or iOS?</strong><br />
          Partially. Most mobile browsers do not fully support the Gamepad API, which means functionality may be limited or unavailable on Android and iOS. For best results, use a desktop browser like Chrome or Edge on Windows, macOS, or Linux.
          <br /><br />
          <strong>Can I test the controller vibration online?</strong><br />
          Yes. Many web-based gamepad testers support vibration feedback. When connected, the tool can trigger your controller's vibration motors to check if they're working correctly. If the controller doesn't vibrate, it may indicate a hardware issue or a lack of support in your browser.
          <br /><br />
          <strong>How can I test my PS4 or PS5 controller online?</strong><br />
          You can test your DUALSHOCK or DualSense controller using any modern browser. Just plug it in, open the tool, and press buttons to see the input results in real time.
          <br /><br />
          <strong>My gamepad says "Vendor: 054c Product: 09cc". What does this mean?</strong><br />
          These values identify your device. For example, “Vendor: 054c” is Sony, and “Product: 09cc” is a DUALSHOCK 4 model. Our gamepad tester fully supports this combination.
          <br /><br />
          <strong>Can I test a Logitech Dual Action controller on this tool?</strong><br />
          Yes! Logitech Dual Action (Vendor: 046d Product: c216) is one of the most tested and reliable USB controllers—fully supported by our online tester.
          <br /><br />
          <strong>Is vJoy or Virtual Joystick supported for developers?</strong><br />
          Absolutely. If you're using vJoy to simulate gamepad inputs, our tool can visualize button mapping and analog responses just like a physical device.
          <br /><br />
          <strong>My controller is listed as “Unknown Gamepad”—what should I do?</strong><br />
          Try reconnecting the controller and refreshing the page. If still not detected, ensure your browser has permission to access input devices and that your USB/Bluetooth connection is stable.

        </article>
      </section>
    </div>
  );
}