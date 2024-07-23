import { exec } from 'child_process'

export function AudioTest() {
  exec('Get-WmiObject Win32_SoundDevice', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`Audio Devices:\n${stdout}`)
      // process.exit(0)
    }
  })
}
export function BrightnessTest() {
  exec(
    '(Get-WmiObject -Namespace root/wmi -Class WmiMonitorBrightness).CurrentBrightness',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Brightness Level: ${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function DisplayTest() {
  exec(
    'Get-WmiObject -Namespace root\\wmi -Class WmiMonitorID',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Display Monitors:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}
export function ExternalDisplayTest() {
  exec(
    'Get-WmiObject -Namespace root\\wmi -Class WmiMonitorID',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Connected Displays:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function RAMTest() {
  exec(
    'Get-WmiObject Win32_OperatingSystem | Select-Object TotalVisibleMemorySize,FreePhysicalMemory',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Memory Info:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function CPUTest() {
  exec('Get-WmiObject Win32_Processor', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`CPU Info:\n${stdout}`)
      // process.exit(0)
    }
  })
}

export function KeyboardTest() {
  exec('Get-WmiObject Win32_Keyboard', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`Keyboard Layout:\n${stdout}`)
      // process.exit(0)
    }
  })
}

export function MouseTest() {
  exec(
    'Get-WmiObject Win32_PointingDevice',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Mouse Devices:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function MicTest() {
  exec('Get-WmiObject Win32_SoundDevice', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`Microphone Devices:\n${stdout}`)
      // process.exit(0)
    }
  })
}

export function LanTest() {
  exec(
    'Get-WmiObject Win32_NetworkAdapter | Where-Object { $_.NetConnectionID -eq "Ethernet" }',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`LAN Interfaces:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function WLanTest() {
  exec('netsh wlan show interfaces', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`Wireless Interfaces:\n${stdout}`)
      // process.exit(0)
    }
  })
}

export function BluetoothTest() {
  exec('Get-PnpDevice -Class Bluetooth', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`Bluetooth Devices:\n${stdout}`)
      // process.exit(0)
    }
  })
}

export function ModemTest() {
  exec(
    'Get-WmiObject -Namespace root\\cimv2 -Class Win32_POTSModem',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Modem Devices:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function RFTest() {
  exec(
    'Get-WmiObject -Namespace root\\cimv2 -Class Win32_POTSModem',
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`)
        // process.exit(1)
      } else {
        console.log(`Modem Devices:\n${stdout}`)
        // process.exit(0)
      }
    }
  )
}

export function PrinterTest() {
  exec('Get-WmiObject Win32_Printer', { shell: 'powershell.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`)
      // process.exit(1)
    } else {
      console.log(`Printers:\n${stdout}`)
      // process.exit(0)
    }
  })
}
