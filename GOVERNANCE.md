# Kurt Storey Foundation Governance

This document outlines the governance structure, rules, and roles for the Kurt Storey Foundation platform.

## Structure

The Kurt Storey Foundation operates under a lean governance model designed to:
1. Ensure transparency in all operations
2. Protect applicants' privacy and dignity
3. Maintain accountability for all decisions
4. Enable efficient instrument distribution
5. Preserve the mission and values of Kurt Storey's legacy

## Roles

### Stewards
- Maximum of 3 stewards at any time
- Responsible for approving governance changes
- Rotation required after 45 days of inactivity
- Must approve all policy changes

### Contributors
- Anyone who contributes to the platform's development or operation
- Can propose changes to governance
- Participate in governance decisions

### Administrators
- Manage day-to-day operations of the platform
- Review and approve applications
- Assign instruments to applicants
- Maintain the instrument catalog
- Handle communications with applicants

## Rules

### Policy Changes
- All policy changes must be approved by at least 1 steward and 1 contributor
- All changes must be documented in GOVERNANCE_LOG.md
- Changes must include rationale and expected impact

### Overrides
- Limited to 1 per project / 90 days
- Must be documented in OVERRIDES.md
- Require a postmortem analysis

### Removals
- Steward removal requires 2 contributors + 1 steward OR 3 contributors
- Must be documented in REMOVALS.md
- Must include justification

### Freeze
- A `.gov_freeze` file can be created to block all governance changes
- Must be lifted via a properly approved PR
- Visible in admin dashboard when active

### Rotation
- Steward rotation must be logged via PR
- Requires steward quorum
- Logged in GOVERNANCE_LOG.md

## Logs

The following logs are maintained for governance transparency:

- **GOVERNANCE_LOG.md**: Records all policy changes
- **OVERRIDES.md**: Documents forced CI merges and hotfixes
- **REMOVALS.md**: Records steward removals
- **POSTMORTEMS.md**: Contains incident analyses
- **STATUS.md**: Tracks governance health

## Compliance

The platform maintains compliance with:
- GDPR and right-to-delete requirements
- Data protection standards
- Ethical instrument distribution principles

## Recovery Procedures

Recovery procedures are documented in OPS_RECOVERY.md, including:
- Fallbacks for outages
- Data restoration protocols
- Emergency contact procedures

## Amendments

This governance document may be amended following the policy change rules outlined above.
