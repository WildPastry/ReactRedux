import FilterButton from './FilterButton';
import { ProjectFilter } from '../models/app.model';
import React from 'react';

export default function ProjectFilters(): JSX.Element {
  return (
    <section aria-label='Gallery Filter Section' className='filterWrapSection'>
      <div className={'filterWrap flex pad'}>
        <FilterButton projectFilter={ProjectFilter.ShowAll} text={'ALL'}/>
        <FilterButton projectFilter={ProjectFilter.ShowApps} text={'Apps'}/>
        <FilterButton projectFilter={ProjectFilter.ShowBranding} text={'Branding'}/>
        <FilterButton projectFilter={ProjectFilter.ShowGraphic} text={'Graphic'}/>
        <FilterButton projectFilter={ProjectFilter.ShowMarketing} text={'Marketing'}/>
        <FilterButton projectFilter={ProjectFilter.ShowWebsites} text={'Websites'}/>
      </div>
    </section>
  );
}
