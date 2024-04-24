'use client';
import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconCode,
  IconGalaxy,
  IconAlignBoxBottomLeft,
  IconAlignBoxBottomRight,
  IconAdjustmentsUp,
} from '@tabler/icons-react';
import { UserButton } from './UserButton/UserButton';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import classes from './NavbarNested.module.css';
import useCustomizerContext from '@/context/CustomizerContext';

const mockdata = [
  {
    label: 'General',
    icon: IconAlignBoxBottomLeft,
    links: [
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'focusBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'progressBar.backgorund', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'selection.background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'scrollbar.shadow', link: '/', options: {
          color: '#fff'
        }
      },
    ],
  },
  {
    label: 'Side Bar',
    icon: IconAdjustments,
    links: [
      {
        label: 'sideBar.background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'sideBar.foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'sideBarSectionHeader.foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'sideBarSectionHeader.border', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'sideBarTitle.foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'sideBar.border', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'list.inactiveSelectionBackground.background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'list.inactiveSelectionForeground.foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'list.hoverbackground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'tree.indentGuidesStroke', link: '/', options: {
          color: '#fff'
        }
      },

    ],
  },
  {
    label: 'Title Bar',
    icon: IconNotes,
    links: [
      {
        label: 'titeBar.activeBackground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'titeBar.activeForeground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'titleBar.Border', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'titeBar.inactiveBackground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'titeBar.inactiveForeground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menuBar.selectionForeground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menuBar.selectionBackground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menuBar.selectionBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menuBar.Background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menuBar.Foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menu.selectionBackground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menu.selectionForeground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menu.selectionBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'menu.border', link: '/', options: {
          color: '#fff'
        }
      },

    ],
  },
  {
    label: 'Status Bar',
    icon: IconAlignBoxBottomRight,
    links: [
      {
        label: 'statusBar.foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'statusBar.background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'statusBar.border', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'selection.background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'scrollbar.shadow', link: '/', options: {
          color: '#fff'
        }
      },
    ],
  },
  {
    label: 'Terminal',
    icon: IconCode,
    links: [
      {
        label: 'background', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'border', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'Title.activeBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },


    ],
  },
  {
    label: 'Inputs',
    icon: IconCode,
    links: [
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'focusBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'progressBar.backgorund', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'selection.background', link: '/', options: {
          color: '#fff'
        }
      },
      { label: 'scrollbar.shadow', link: '/' },
    ],
  },
  {
    label: 'Activity Bar',
    icon: IconCode,
    links: [
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'focusBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'progressBar.backgorund', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'selection.background', link: '/', options: {
          color: '#fff'
        }
      },
      { label: 'scrollbar.shadow', link: '/' },
    ],
  },

  {
    label: 'Inputs',
    icon: IconCode,
    links: [
      {
        label: 'foreground', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'focusBorder', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'progressBar.backgorund', link: '/', options: {
          color: '#fff'
        }
      },
      {
        label: 'selection.background', link: '/', options: {
          color: '#fff'
        }
      },
      { label: 'scrollbar.shadow', link: '/' },
    ],
  },
];

export default function NavbarNested({ setSelComponent }) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} setSelComponent={setSelComponent} />);

  const { VSCodeThemeObject } = useCustomizerContext();

  const categoriesThemeObject = Object.keys(VSCodeThemeObject.colors).filter((themeObject) => {
    return colorCategories.some((category) => filterCategory(themeObject.name, category));
  });

  console.log(categoriesThemeObject);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Title order={3}>ThemeForge</Title>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}