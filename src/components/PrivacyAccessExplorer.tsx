'use client';

import React, { useState } from 'react';
import { Lock, EyeOff, CheckCircle2 } from 'lucide-react';
import {
  ROLE_VISIBILITY_RULES,
  getRoleVisibilityRule,
  type AccessRoleId,
  type RoleFieldPermission,
} from '@/lib/legal-support-data';

function getPermissionBadgeStyle(status: RoleFieldPermission['status']): {
  badgeClass: string;
  iconClass: string;
  Icon: typeof Lock;
} {
  if (status === 'Penuh') {
    return {
      badgeClass: 'bg-[#E5F4FC] text-sky-900 border border-[#9DD2F2]',
      iconClass: 'text-sky-600',
      Icon: CheckCircle2,
    };
  }
  return {
    badgeClass: 'bg-slate-100 text-slate-700 border border-slate-200',
    iconClass: 'text-slate-600',
    Icon: EyeOff,
  };
}

export default function PrivacyAccessExplorer() {
  const [selectedRole, setSelectedRole] =
    useState<AccessRoleId>('siswa-pelapor');
  const activeRule = getRoleVisibilityRule(selectedRole);

  return (
    <section
      id="simulasi-akses"
      aria-labelledby="simulasi-akses-heading"
      className="bg-[#CCEAFC] border border-[#9DD2F2] rounded-2xl p-5 sm:p-7 shadow-sm scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2
            id="simulasi-akses-heading"
            className="text-lg sm:text-xl font-bold text-slate-900"
          >
            Simulasi Hak Akses Berdasarkan Peran
          </h2>
          <p className="mt-1 text-sm text-slate-700">
            Pilih peran pengguna untuk melihat batas akses laporan di Dashboard
            Siswa dan Console Admin Guru BK.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-white border border-[#9DD2F2] text-xs font-bold text-sky-900 shrink-0">
          <Lock className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
          <span>Isolasi Firestore RBAC</span>
        </div>
      </div>

      {/* Role Switcher Tabs (Single-Row Mobile & Desktop, 3D Active Navy matching Navbar) */}
      <div
        role="tablist"
        aria-label="Pilih peran akun untuk melihat izin data"
        className="mt-5 grid grid-cols-3 gap-1 sm:gap-2 bg-white border border-[#9DD2F2] rounded-2xl p-1.5"
      >
        {ROLE_VISIBILITY_RULES.map((role) => {
          const isSelected = role.id === selectedRole;
          return (
            <button
              key={role.id}
              type="button"
              role="tab"
              id={`tab-${role.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${role.id}`}
              onClick={() => setSelectedRole(role.id)}
              className={`min-w-0 min-h-[44px] px-1.5 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-sm font-bold text-center whitespace-nowrap transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#0B132B] text-white shadow-[0_8px_18px_-4px_rgba(11,19,43,0.48),inset_0_1px_1px_rgba(255,255,255,0.24)]'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-[#E5F4FC]'
              }`}
            >
              <span className="sm:hidden">{role.mobileLabel}</span>
              <span className="hidden sm:inline">{role.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Role Permission Matrix */}
      <div
        role="tabpanel"
        id={`panel-${activeRule.id}`}
        aria-labelledby={`tab-${activeRule.id}`}
        className="mt-4 bg-white border border-[#9DD2F2] rounded-xl p-4 sm:p-5 shadow-2xs"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[#E5F4FC]">
          <span className="text-sm font-bold text-slate-900">
            {activeRule.label}
          </span>
          <span className="inline-flex items-center self-start px-3 py-1 rounded-lg text-xs font-bold bg-[#E5F4FC] text-sky-900 border border-[#9DD2F2]">
            {activeRule.badge}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          {activeRule.accessSummary}
        </p>

        <dl className="mt-4 divide-y divide-[#E5F4FC]">
          {activeRule.fields.map((item) => {
            const { badgeClass, iconClass, Icon } = getPermissionBadgeStyle(
              item.status
            );
            return (
              <div
                key={item.field}
                className="py-3 first:pt-1 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div className="min-w-0">
                  <dt className="text-sm font-bold text-slate-900">
                    {item.field}
                  </dt>
                  <dd className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {item.detail}
                  </dd>
                </div>
                <dd className="shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${badgeClass}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${iconClass}`} aria-hidden="true" />
                    <span>{item.status}</span>
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
