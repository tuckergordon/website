import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tuckerTheme: CustomThemeConfig = {
  name: 'tucker-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `'Outfit Variable', sans-serif`,
    '--theme-font-family-heading': `'Outfit Variable', sans-serif`,
    '--theme-font-color-base': 'var(--color-secondary-900)',
    '--theme-font-color-dark': 'var(--color-surface-50)',
    '--theme-rounded-base': '8px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #628e6b
    '--color-primary-50': '231 238 233', // #e7eee9
    '--color-primary-100': '224 232 225', // #e0e8e1
    '--color-primary-200': '216 227 218', // #d8e3da
    '--color-primary-300': '192 210 196', // #c0d2c4
    '--color-primary-400': '145 176 151', // #91b097
    '--color-primary-500': '98 142 107', // #628e6b
    '--color-primary-600': '88 128 96', // #588060
    '--color-primary-700': '74 107 80', // #4a6b50
    '--color-primary-800': '59 85 64', // #3b5540
    '--color-primary-900': '48 70 52', // #304634
    // secondary | #3c76cd
    '--color-secondary-50': '226 234 248', // #e2eaf8
    '--color-secondary-100': '216 228 245', // #d8e4f5
    '--color-secondary-200': '206 221 243', // #ceddf3
    '--color-secondary-300': '177 200 235', // #b1c8eb
    '--color-secondary-400': '119 159 220', // #779fdc
    '--color-secondary-500': '60 118 205', // #3c76cd
    '--color-secondary-600': '54 106 185', // #366ab9
    '--color-secondary-700': '45 89 154', // #2d599a
    '--color-secondary-800': '36 71 123', // #24477b
    '--color-secondary-900': '29 58 100', // #1d3a64
    // tertiary | #174673
    '--color-tertiary-50': '220 227 234', // #dce3ea
    '--color-tertiary-100': '209 218 227', // #d1dae3
    '--color-tertiary-200': '197 209 220', // #c5d1dc
    '--color-tertiary-300': '162 181 199', // #a2b5c7
    '--color-tertiary-400': '93 126 157', // #5d7e9d
    '--color-tertiary-500': '23 70 115', // #174673
    '--color-tertiary-600': '21 63 104', // #153f68
    '--color-tertiary-700': '17 53 86', // #113556
    '--color-tertiary-800': '14 42 69', // #0e2a45
    '--color-tertiary-900': '11 34 56', // #0b2238
    // success | #84cc16
    '--color-success-50': '237 247 220', // #edf7dc
    '--color-success-100': '230 245 208', // #e6f5d0
    '--color-success-200': '224 242 197', // #e0f2c5
    '--color-success-300': '206 235 162', // #ceeba2
    '--color-success-400': '169 219 92', // #a9db5c
    '--color-success-500': '132 204 22', // #84cc16
    '--color-success-600': '119 184 20', // #77b814
    '--color-success-700': '99 153 17', // #639911
    '--color-success-800': '79 122 13', // #4f7a0d
    '--color-success-900': '65 100 11', // #41640b
    // warning | #EAB308
    '--color-warning-50': '252 244 218', // #fcf4da
    '--color-warning-100': '251 240 206', // #fbf0ce
    '--color-warning-200': '250 236 193', // #faecc1
    '--color-warning-300': '247 225 156', // #f7e19c
    '--color-warning-400': '240 202 82', // #f0ca52
    '--color-warning-500': '234 179 8', // #EAB308
    '--color-warning-600': '211 161 7', // #d3a107
    '--color-warning-700': '176 134 6', // #b08606
    '--color-warning-800': '140 107 5', // #8c6b05
    '--color-warning-900': '115 88 4', // #735804
    // error | #d21919
    '--color-error-50': '248 221 221', // #f8dddd
    '--color-error-100': '246 209 209', // #f6d1d1
    '--color-error-200': '244 198 198', // #f4c6c6
    '--color-error-300': '237 163 163', // #eda3a3
    '--color-error-400': '224 94 94', // #e05e5e
    '--color-error-500': '210 25 25', // #d21919
    '--color-error-600': '189 23 23', // #bd1717
    '--color-error-700': '158 19 19', // #9e1313
    '--color-error-800': '126 15 15', // #7e0f0f
    '--color-error-900': '103 12 12', // #670c0c
    // surface | #c9c1a2
    '--color-surface-50': '247 246 241', // #f7f6f1
    '--color-surface-100': '244 243 236', // #f4f3ec
    '--color-surface-200': '242 240 232', // #f2f0e8
    '--color-surface-300': '233 230 218', // #e9e6da
    '--color-surface-400': '217 212 190', // #d9d4be
    '--color-surface-500': '201 193 162', // #c9c1a2
    '--color-surface-600': '181 174 146', // #b5ae92
    '--color-surface-700': '151 145 122', // #97917a
    '--color-surface-800': '121 116 97', // #797461
    '--color-surface-900': '98 95 79', // #625f4f
  },
  properties_dark: {
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '0 0 0',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #3c76cd
    '--color-primary-50': '226 234 248', // #e2eaf8
    '--color-primary-100': '216 228 245', // #d8e4f5
    '--color-primary-200': '206 221 243', // #ceddf3
    '--color-primary-300': '177 200 235', // #b1c8eb
    '--color-primary-400': '119 159 220', // #779fdc
    '--color-primary-500': '60 118 205', // #3c76cd
    '--color-primary-600': '54 106 185', // #366ab9
    '--color-primary-700': '45 89 154', // #2d599a
    '--color-primary-800': '36 71 123', // #24477b
    '--color-primary-900': '29 58 100', // #1d3a64
    // secondary | #0EA5E9
    '--color-secondary-50': '219 242 252', // #dbf2fc
    '--color-secondary-100': '207 237 251', // #cfedfb
    '--color-secondary-200': '195 233 250', // #c3e9fa
    '--color-secondary-300': '159 219 246', // #9fdbf6
    '--color-secondary-400': '86 192 240', // #56c0f0
    '--color-secondary-500': '14 165 233', // #0EA5E9
    '--color-secondary-600': '13 149 210', // #0d95d2
    '--color-secondary-700': '11 124 175', // #0b7caf
    '--color-secondary-800': '8 99 140', // #08638c
    '--color-secondary-900': '7 81 114', // #075172
    // tertiary | #DFD6B4
    '--color-tertiary-50': '250 249 244', // #faf9f4
    '--color-tertiary-100': '249 247 240', // #f9f7f0
    '--color-tertiary-200': '247 245 236', // #f7f5ec
    '--color-tertiary-300': '242 239 225', // #f2efe1
    '--color-tertiary-400': '233 226 203', // #e9e2cb
    '--color-tertiary-500': '223 214 180', // #DFD6B4
    '--color-tertiary-600': '201 193 162', // #c9c1a2
    '--color-tertiary-700': '167 161 135', // #a7a187
    '--color-tertiary-800': '134 128 108', // #86806c
    '--color-tertiary-900': '109 105 88', // #6d6958
    // surface | #174673
    '--color-surface-50': '220 227 234', // #dce3ea
    '--color-surface-100': '209 218 227', // #d1dae3
    '--color-surface-200': '197 209 220', // #c5d1dc
    '--color-surface-300': '162 181 199', // #a2b5c7
    '--color-surface-400': '93 126 157', // #5d7e9d
    '--color-surface-500': '23 70 115', // #174673
    '--color-surface-600': '21 63 104', // #153f68
    '--color-surface-700': '17 53 86', // #113556
    '--color-surface-800': '14 42 69', // #0e2a45
    '--color-surface-900': '11 34 56', // #0b2238
  },
};
