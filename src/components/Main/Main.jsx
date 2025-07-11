'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGamepad, FaWifi } from 'react-icons/fa';
import { MdSignalWifiOff } from 'react-icons/md';
import styles from './Main.module.css';

export default function Main() {
  const pathname = usePathname();
  const [connections, setConnections] = useState([false, false, false, false]);
  const [signalStrength, setSignalStrength] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const pads = navigator.getGamepads?.() || [];
        const newConnections = [
          pads[0]?.connected || false,
          pads[1]?.connected || false,
          pads[2]?.connected || false,
          pads[3]?.connected || false
        ];
        
        const newSignalStrength = newConnections.map((connected, index) => {
          if (!connected) return 0;
          const pad = pads[index];
          if (pad?.timestamp) {
            return Math.floor(Math.random() * 2) + 3;
          }
          return 3;
        });
        
        setConnections(newConnections);
        setSignalStrength(newSignalStrength);
      } catch (error) {
        console.warn('Gamepad API not supported:', error);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const routes = [
    { path: '/main/one', label: 'Player 1', index: 0, color: '#3b82f6' },
    { path: '/main/two', label: 'Player 2', index: 1, color: '#ef4444' },
    { path: '/main/three', label: 'Player 3', index: 2, color: '#10b981' },
    { path: '/main/four', label: 'Player 4', index: 3, color: '#f59e0b' }
  ];

  const renderWifiIcon = (isConnected, strength, color) => {
    if (!isConnected) {
      return <MdSignalWifiOff className={styles.statusDisconnected} />;
    }
    
    return (
      <div className={styles.wifiContainer}>
        <FaWifi 
          className={styles.statusConnected} 
          style={{ color: color }}
        />
        <div className={styles.signalBars}>
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`${styles.signalBar} ${strength >= bar ? styles.signalBarActive : ''}`}
              style={{ 
                backgroundColor: strength >= bar ? color : 'rgba(156, 163, 175, 0.3)',
                animationDelay: `${bar * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav className={styles.gamepadNav} id='tester'>
      <div className={styles.gridContainer}>
        {routes.map((route) => {
          const isActive = pathname === route.path;
          const isConnected = connections[route.index];
          const strength = signalStrength[route.index];
         
          return (
            <Link 
              key={route.path} 
              href={route.path} 
              className={styles.gridItem}
            >
              <div 
                className={`${styles.navButton} ${isActive ? styles.active : ''} ${isConnected ? styles.connected : ''}`}
                style={{
                  '--player-color': route.color,
                  '--player-color-light': route.color + '20',
                  '--player-color-dark': route.color + '80'
                }}
              >
                <div className={styles.iconContainer}>
                  <FaGamepad className={styles.gamepadIcon} />
                  <div className={styles.playerNumber}>{route.index + 1}</div>
                </div>
                <div className={styles.contentContainer}>
                  <span className={styles.label}>{route.label}</span>
                  <div className={styles.connectionInfo}>
                    <span className={styles.connectionText}>
                      {isConnected ? 'Connected' : 'Disconnected'}
                    </span>
                    {isConnected && (
                      <div className={styles.signalStrengthText}>
                        Signal: {strength}/4
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.status}>
                  {renderWifiIcon(isConnected, strength, route.color)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}